import React from 'react';
import { DirectoryTypes, FolderTypes } from './CategoryMenuButton';

export type FolderDetailProps = {
  folderData: DirectoryTypes;
  indexItem: number;
};

const CategoryBoard: React.FC<FolderDetailProps> = ({
  folderData,
  indexItem,
}) => {
  const boardSize = {
    minHeight: '15rem',
    maxHeight: ' max-content',
  };
  return (
    <div
      className={`left-auto min-h-60 max-h-full w-full bg-white drop-shadow-xl`}
    >
      <div className='grid grid-cols-4 gap-4 p-4' style={boardSize}>
        {folderData.childrenDirectory.map(
          (folder: FolderTypes, index: number) => {
            return (
              <div key={folder.folderTitle + index}>
                <div className='font-bold mb-2'>{folder.folderTitle}</div>
                {folder.folderItems.map((item) => {
                  return (
                    <div key={item.itemTitle + Math.random()}>
                      <a
                        href={item.itemLink}
                        className='font-sm hover:text-secondary hover:font-medium '
                      >
                        {item.itemTitle}
                      </a>
                    </div>
                  );
                })}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
export default CategoryBoard;
