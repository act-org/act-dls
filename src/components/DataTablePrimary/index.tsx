/**
 * @prettier
 */

import * as React from 'react';
import { compact } from 'lodash';

import search from '~/helpers/search';
import sort from '~/helpers/sort';
import { SortObject } from '~/types';
import TableBase from '~/components/TableBase';
import TableBodyBase from '~/components/TableBodyBase';
import TableCellBody from '~/components/TableCellBody';
import TableCellHead from '~/components/TableCellHead';
import TableContainerPrimary from '~/components/TableContainerPrimary';
import TableHeadBase from '~/components/TableHeadBase';
import TableRowBase from '~/components/TableRowBase';

interface Column {
  dataKey: string;
  displayValueFn?: (item: any) => void;
  label: string;
  searchable: boolean;
  sortable: boolean;
  style?: React.CSSProperties;
}

export interface Props {
  columns: Column[];
  items: any[];
  searchQuery?: string;
  setSortObject: (sortObject: SortObject) => void;
  sortObject: SortObject;
}

const DataTablePrimary: React.FC<Props> = ({
  columns,
  items: originalItems,
  searchQuery = '',
  setSortObject,
  sortObject,
}: Props): React.ReactElement<any> => {
  // sort items
  let items = originalItems.sort(sort(sortObject));

  // search items
  const searchableKeys = compact(
    columns.map(({ dataKey, searchable }): string | null =>
      searchable ? dataKey : null,
    ),
  );
  if (searchableKeys.length > 0 && searchQuery.length > 0) {
    items = search(items, searchableKeys, searchQuery);
  }

  return (
    <TableContainerPrimary>
      <TableBase>
        <TableHeadBase>
          <TableRowBase>
            {columns.map(
              (column): React.ReactElement<any> => (
                <TableCellHead
                  dataKey={column.dataKey}
                  key={column.dataKey}
                  setSortObject={setSortObject}
                  sortable={column.sortable}
                  sortObject={sortObject}
                  style={column.style}
                >
                  {column.label}
                </TableCellHead>
              ),
            )}
          </TableRowBase>
        </TableHeadBase>

        <TableBodyBase>
          {items.map(
            (item, i): React.ReactElement<any> => (
              // eslint-disable-next-line react/no-array-index-key
              <TableRowBase key={i}>
                {columns.map(
                  (column): React.ReactElement<any> => (
                    <TableCellBody key={column.dataKey} style={column.style}>
                      {column.displayValueFn
                        ? column.displayValueFn(item)
                        : item[column.dataKey]}
                    </TableCellBody>
                  ),
                )}
              </TableRowBase>
            ),
          )}
        </TableBodyBase>
      </TableBase>
    </TableContainerPrimary>
  );
};

export default DataTablePrimary;