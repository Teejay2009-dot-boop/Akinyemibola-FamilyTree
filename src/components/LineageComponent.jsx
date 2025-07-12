import React from "react";

function Lineage({ data }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Lineage of {data.father}</h2>
      <ul className="space-y-2">
        {data.children.map((child, index) => (
          <li key={index} className="ml-4">
            <strong>{child.name}</strong>
            {child.children.length > 0 && (
              <ul className="ml-4 list-disc">
                {child.children.map((grandchild, idx) => (
                  <li key={idx}>{grandchild}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lineage;
