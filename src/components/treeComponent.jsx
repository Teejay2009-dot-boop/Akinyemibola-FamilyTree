import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import { FirstGeneration } from "../data/TreeData";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

function FamilyTreeComponent() {
  return (
    <div className="tree-wrapper">
      <div className="tree-scroll-wrapper">
        <TransformWrapper>
          <TransformComponent>
            <Tree
              lineWidth={"2px"}
              lineColor={"black"}
              lineBorderRadius={"10px"}
              label={<div>First Generation</div>}
              orientation="vertical"
            >
              {FirstGeneration.map((child) => (
                <TreeNode key={child.id} label={<div>{child.name}</div>} />
              ))}
            </Tree>
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>
  );
}

export default FamilyTreeComponent;
