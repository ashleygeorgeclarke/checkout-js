import { FormikErrors } from "formik";
import React, { FunctionComponent } from "react";

import { isMobileView } from "../ui/responsive";

import { AllocateItemsModalFormValues } from "./AllocateItemsModal";
import LeftToAllocateItem from "./LeftToAllocateItem";
import { MultiShippingTableItemWithType } from "./MultishippingV2Type";

interface LeftToAllocateItemsTableProps {
    items: MultiShippingTableItemWithType[];
    formErrors: FormikErrors<AllocateItemsModalFormValues>;
}

const LeftToAllocateItemsTable: FunctionComponent<LeftToAllocateItemsTableProps> = ({ items, formErrors }: LeftToAllocateItemsTableProps) => {
    const isMobileViewUI = isMobileView();

    return (
        <table className="table left-to-allocate-items-table">
            <thead>
                <tr>
                    <th>Item</th>
                    {!isMobileViewUI && <th>Left to allocate</th>}
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <LeftToAllocateItem
                        error={formErrors[item.id.toString()]}
                        item={item}
                        key={item.id}
                    />      
                ))}
            </tbody>
        </table>
    );
}

export default LeftToAllocateItemsTable;
