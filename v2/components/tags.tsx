import { useState } from "react";

export type tagType = { title: string, isSelected: false };

const Tags = (
  { tags, onSelect, onReset }: { tags: tagType[], onSelect: (tag: tagType) => void, onReset: () => void }
) => {
  const [isMore, setIsMore] = useState(false)
  const renderedTags = isMore ? tags : tags.slice(0, 8);

  return (
    <p className="space-x-2 space-y-2 max-w-5xl ml-auto mb-5">
      {renderedTags.map((t) =>
        <button className={`px-2 rounded-lg shadow-md border ${t.isSelected && 'bg-[#707175] dark:bg-[#cac3bc] text-white dark:text-[#252c31]'}`} onClick={() => onSelect(t)}>
          {t.title}
        </button>)}
        <button className={`px-2 rounded-lg shadow-md border`} onClick={() => setIsMore(!isMore)}>
          {isMore ? 'Less...' : 'More...'}
        </button>
        <button className={`px-2 rounded-lg shadow-md border`} onClick={onReset}>
          Reset
        </button>
    </p>
  )
}

export default Tags;
