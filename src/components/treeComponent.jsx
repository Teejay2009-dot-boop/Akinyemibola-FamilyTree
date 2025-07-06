import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";

function FamilyTreeComponent() {
  return (
    <div className="tree-wrapper">
      <div className="tree-scroll-wrapper">
        <Tree label={<div className="tree-node">Iya Agba Akinlemibola</div>}>
          <TreeNode label={<div className="tree-node">Child 1</div>}>
            <TreeNode label={<div className="tree-node">Grandchild 1</div>} />
            <TreeNode label={<div className="tree-node">Grandchild 2</div>} />
          </TreeNode>

          <TreeNode label={<div className="tree-node">Child 2</div>}>
            <TreeNode label={<div className="tree-node">Father</div>}>
              <TreeNode label={<div className="tree-node">Client</div>}>
                <TreeNode label={<div className="tree-node">Child A</div>} />
                <TreeNode label={<div className="tree-node">Child B</div>} />
                <TreeNode label={<div className="tree-node">Child C</div>} />
              </TreeNode>
            </TreeNode>
          </TreeNode>
        </Tree>
      </div>
    </div>
  );
}

export default FamilyTreeComponent;
