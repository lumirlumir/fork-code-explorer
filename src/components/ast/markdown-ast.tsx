import { Accordion } from "@/components/ui/accordion";
import { Editor } from "@/components/editor";
import { useAST } from "@/hooks/use-ast";
import { useExplorer } from "@/hooks/use-explorer";
import {
	MarkdownAstTreeItem,
	type MarkdownAstTreeItemProperties,
} from "./markdown-ast-tree-item";
import type { FC } from "react";
import { parseError } from "@/lib/parse-error";
import { ErrorState } from "../error-boundary";

export const MarkdownAst: FC = () => {
	const result = useAST();
	const { viewModes } = useExplorer();
	const { astView } = viewModes;

	if (!result.ok) {
		const message = parseError(result.errors[0]);
		return <ErrorState message={message} />;
	}

	const ast = JSON.stringify(result.ast, null, 2);

	if (astView === "tree") {
		return (
			<Accordion
				type="multiple"
				className="px-8 pb-4 font-mono space-y-3 min-w-max"
				defaultValue={["0-root"]}
			>
				<MarkdownAstTreeItem
					data={result.ast as MarkdownAstTreeItemProperties["data"]}
					index={0}
					esqueryMatchedNodes={
						result.esqueryMatchedNodes as MarkdownAstTreeItemProperties["esqueryMatchedNodes"]
					}
				/>
			</Accordion>
		);
	}

	return <Editor readOnly value={ast} />;
};
