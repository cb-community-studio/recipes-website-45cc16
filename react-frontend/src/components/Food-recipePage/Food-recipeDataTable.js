
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';


const Food-recipeDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const imageTemplate0 = (rowData, { rowIndex }) => <Image src={rowData.image}  alt="Image" height="60px" />
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.name}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.ingredients}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.methods}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="image" header="Image" body={imageTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="name" header="Food Name" body={pTemplate1} sortable style={{ minWidth: "8rem" }} />
            <Column field="ingredients" header="Ingredients" body={pTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="methods" header="Step by step" body={pTemplate3} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default Food-recipeDataTable;