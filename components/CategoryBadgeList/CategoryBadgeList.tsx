import React, { FC } from "react";
import Badge from "@/components/Badge/Badge";

export interface CategoryBadgeListProps {
  className?: string;
  itemClass?: string;
  category: any;
}

const CategoryBadgeList: FC<CategoryBadgeListProps> = ({
  className = "flex flex-wrap space-x-2",
  itemClass,
  category,
}) => {
  return (
    <div
      className={`nc-CategoryBadgeList ${className}`}
      data-nc-id="CategoryBadgeList"
    >
      <Badge
        key={category.id}
        className={itemClass}
        name={category.title}
        href={category.slug}
        color={category.color as any}
      />
    </div>
  );
};

export default CategoryBadgeList;
