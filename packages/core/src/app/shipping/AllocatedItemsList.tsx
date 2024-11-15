import React from "react";

import { IconClose } from "../ui/icon";

import { MultiShippingTableData, MultiShippingTableItemWithType } from "./MultishippingV2Type";
import { TranslatedString } from '@bigcommerce/checkout/locale';

export const getItemContent = (lineItem: MultiShippingTableItemWithType) => {
    return <span>
        <strong>{`${lineItem.quantity} x `}</strong>
        {lineItem.name}
        {lineItem.options?.length
            ? <span className="line-item-options">{` - ${lineItem.options.map(option => option.value).join('/ ')}`}</span>
            : ''}
    </span>;
};

interface AllocatedItemsListProps {
    assignedItems: MultiShippingTableData;
    onUnassignItem(itemToDelete: MultiShippingTableItemWithType): void;
}

const AllocatedItemsList = ({ assignedItems, onUnassignItem }: AllocatedItemsListProps) => {
    return (
        <div className="allocated-line-items">
            <h3><TranslatedString data={{ count: assignedItems.shippableItemsCount }} id="shipping.multishipping_item_allocated_message" /></h3>
            <ul className="allocated-line-items-list">
                {assignedItems.lineItems.map(item => (
                    <li key={item.id}>
                        {getItemContent(item)}
                        <span data-test={`remove-${item.id.toString()}-button`} onClick={() => onUnassignItem(item)}>
                            <IconClose />
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AllocatedItemsList;
