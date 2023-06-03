import * as React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbDivider,
  BreadcrumbProps,
  partitionBreadcrumbItems,
  BreadcrumbButton,
  truncateBreadcrumbLongName,
  truncateBreadcrumLongTooltip,
} from '@fluentui/react-breadcrumb';
import type { PartitionBreadcrumbItems } from '@fluentui/react-breadcrumb';
import { ArrowRight16Filled, MoreHorizontalRegular, MoreHorizontalFilled, bundleIcon } from '@fluentui/react-icons';
import { Tooltip } from '@fluentui/react-components';

const MoreHorizontal = bundleIcon(MoreHorizontalFilled, MoreHorizontalRegular);

type Item = {
  key: number;
  value: string;
};
const items: Item[] = [
  {
    key: 0,
    value: 'Item 1',
  },
  {
    key: 1,
    value: 'Item 2',
  },
  {
    key: 2,
    value: 'Item 3',
  },
  {
    key: 3,
    value: 'Item 4',
  },
  {
    key: 4,
    value: 'Item 5 which is longer than 30 characters',
  },
  {
    key: 5,
    value: "Item 6 is long even for tooltip. Don't think about what you want to be, but what you want to do.",
  },
];

function renderItem(item: Item, size: BreadcrumbProps['size']) {
  const isLastItem = items.length - 1 === item.key;
  return (
    <React.Fragment key={`${size}-item-${item.key}`}>
      <Tooltip withArrow content={truncateBreadcrumLongTooltip(item.value)} relationship="label">
        <BreadcrumbItem current={isLastItem}>{truncateBreadcrumbLongName(item.value)}</BreadcrumbItem>
      </Tooltip>
      {!isLastItem && <BreadcrumbDivider />}
    </React.Fragment>
  );
}

export const Default = () => {
  const { startDisplayedItems, overflowItems, endDisplayedItems }: PartitionBreadcrumbItems<Item> =
    partitionBreadcrumbItems({
      items,
      maxDisplayedItems: 3,
    });
  return (
    <>
      <Breadcrumb aria-label="breadcrumb-with-overflow">
        {startDisplayedItems.map(item => renderItem(item, 'medium'))}
        {overflowItems && (
          <BreadcrumbItem>
            <Tooltip withArrow content={getTooltipContent(overflowItems)} relationship="label">
              <BreadcrumbButton icon={<MoreHorizontal />} aria-label={`more items`} />
            </Tooltip>
          </BreadcrumbItem>
        )}
        {endDisplayedItems && endDisplayedItems.map(item => renderItem(item, 'medium'))}
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem>Item with custom divider</BreadcrumbItem>
        <BreadcrumbDivider>
          <ArrowRight16Filled />
        </BreadcrumbDivider>
        <BreadcrumbItem>Item</BreadcrumbItem>
        <BreadcrumbDivider />
        <BreadcrumbItem current>Item</BreadcrumbItem>
      </Breadcrumb>
    </>
  );
};

const getTooltipContent = (breadcrumbItems: readonly Item[]) => {
  return breadcrumbItems.reduce((acc, initialValue, idx, arr) => {
    return (
      <div style={{ display: 'flex' }}>
        {acc}
        {arr[0].value !== initialValue.value && <BreadcrumbDivider />}
        {initialValue.value}
      </div>
    );
  }, <div style={{ display: 'flex' }} />);
};