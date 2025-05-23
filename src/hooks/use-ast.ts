import * as espree from "espree";
import type { Node as EstreeNode } from "estree";
import css from "@eslint/css";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import html from "@html-eslint/eslint-plugin";
import esquery from "esquery";
import { useExplorer } from "@/hooks/use-explorer";
import { assertIsUnreachable } from "@/lib/utils";

export function useAST() {
	const {
		language,
		code,
		jsOptions,
		cssOptions,
		jsonOptions,
		markdownOptions,
		esquerySelector,
	} = useExplorer();

	let astParseResult:
		| { ok: true; ast: unknown }
		| { ok: false; errors: Array<unknown> };

	switch (language) {
		case "javascript": {
			try {
				const ast = espree.parse(code.javascript, {
					ecmaVersion: jsOptions.esVersion,
					sourceType: jsOptions.sourceType,
					ecmaFeatures: {
						jsx: jsOptions.isJSX,
					},
				});
				astParseResult = { ast, ok: true };
			} catch (err) {
				// error occured e.g. because the JS code cannot be parsed into an AST, or the esquery selector is no valid selector --> just ignore (no highlighted ranges)
				astParseResult = { ok: false, errors: [err] };
			}
			break;
		}

		case "json": {
			const { jsonMode, allowTrailingCommas } = jsonOptions;
			const language = json.languages[jsonMode];
			astParseResult = language.parse(
				{
					body: code.json,
					path: "",
					physicalPath: "",
					bom: false,
				},
				{
					languageOptions: {
						allowTrailingCommas,
					},
				},
			);
			break;
		}

		case "markdown": {
			const { markdownMode, markdownFrontmatter } = markdownOptions;
			const language = markdown.languages[markdownMode];
			astParseResult = language.parse(
				{ body: code.markdown, path: "", physicalPath: "", bom: false },
				{
					languageOptions: {
						frontmatter:
							markdownFrontmatter === "off"
								? false
								: markdownFrontmatter,
					},
				},
			);
			break;
		}

		case "css": {
			const { cssMode, tolerant } = cssOptions;
			const language = css.languages[cssMode];
			astParseResult = language.parse(
				{ body: code.css, path: "", physicalPath: "", bom: false },
				{ languageOptions: { tolerant } },
			);
			break;
		}

		case "html": {
			const language = html.languages.html;
			astParseResult = language.parse({
				body: code.html,
				path: "",
				physicalPath: "",
				bom: false,
			});
			break;
		}

		default: {
			assertIsUnreachable(language);
		}
	}

	if (astParseResult.ok) {
		const esqueryMatchedNodes = getEsqueryMatchedNodes(
			astParseResult.ast,
			esquerySelector?.selector ?? "",
		);

		return {
			...astParseResult,
			esqueryMatchedNodes,
		};
	} else {
		return astParseResult;
	}
}

function getEsqueryMatchedNodes(ast: unknown, esquerySelector: string) {
	if (esquerySelector.trim().length > 0) {
		try {
			const esqueryMatchedNodes = esquery.match(
				ast as EstreeNode,
				esquery.parse(esquerySelector),
			) as unknown[];
			return esqueryMatchedNodes;
		} catch {
			// error occured e.g. because the esquery selector is no valid selector --> just ignore (no nodes matched --> no highlighted ranges)
		}
	}
	return [];
}
