import { logDOM } from '@testing-library/dom';
import react, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import '../arrowsCss.css'

const TableComp = () => {
    let history = useHistory()
    const [table, setTable] = useState([])
    const [startingPositionTable, setStartingPositionTable] = useState([])
    const [clientIdFilter, setClientIdFilter] = useState('')
    const [clientNameFilter, setClientNameFilter] = useState('')
    const [dateFilter, setDateFilter] = useState('')
    const [numberFilter, setNumberFilter] = useState('')
    const [supplierFilter, setSupplierFilter] = useState('')
    const [fromDateFilter, setFromDateFilter] = useState('')
    const [toDateFilter, setToDateFilter] = useState('')
    const [statusFilter, setStatusFilter] = useState('')
    const [quantityFilter, setQuantityFilter] = useState('')
    const [received, setReceived] = useState('')
    const [inTheFactory, setInTheFactory] = useState('')
    const [onTheWay, setOnTheWay] = useState('')
    const [clientIdAsc, setClientIdAsc] = useState(0)
    const [clientNameAsc, setClientNameAsc] = useState(0)
    const [dateAsc, setDateAsc] = useState(0)
    const [numberAsc, setNumberAsc] = useState(0)
    const [supplierNameAsc, setSupplierNameAsc] = useState(0)
    const [fromDateAsc, setFromDateAsc] = useState(0)
    const [toDateAsc, setToDateAsc] = useState(0)
    const [statusAsc, setStatusAsc] = useState(0)
    const [quantityAsc, setQuantityAsc] = useState(0)
    const [receivedAsc, setReceivedAsc] = useState(0)
    const [inTheFactoryAsc, setInTheFactoryAsc] = useState(0)
    const [onTheWayAsc, setOnTheWayAsc] = useState(0)

    useEffect(() => {
        let data = require('./data.json')
        setTable(data);
        setStartingPositionTable(data)
    }, [])

    const sortTable = (param, order) => {
        let tableArr = table
        switch (param) {
            case 'Client_ID':
                if (order === 0 || order === 2) {
                    //Sorting by Ascending order
                    tableArr.sort((a, b) => (a.Client_ID > b.Client_ID) ? 1 : (a.Client_ID < b.Client_ID) ? -1 : 0)
                    setClientIdAsc(1)
                } else {
                    //Sorting by Descending order
                    tableArr.sort((a, b) => (a.Client_ID < b.Client_ID) ? 1 : (a.Client_ID > b.Client_ID) ? -1 : 0)
                    setClientIdAsc(2)
                }
                break;
            case 'Client_Name':
                if (order === 0 || order === 2) {
                    //Sorting by Ascending order
                    tableArr.sort((a, b) => (a.Client_Name > b.Client_Name) ? 1 : (a.Client_Name < b.Client_Name) ? -1 : 0)
                    setClientNameAsc(1)
                } else {
                    //Sorting by Descending order
                    tableArr.sort((a, b) => (a.Client_Name < b.Client_Name) ? 1 : (a.Client_Name > b.Client_Name) ? -1 : 0)
                    setClientNameAsc(2)
                }
                break;
            case 'Date':
                if (order === 0 || order === 2) {
                    //Sorting by Ascending order
                    tableArr.sort((a, b) => (a.Date > b.Date) ? 1 : (a.Date < b.Date) ? -1 : 0)
                    setDateAsc(1)
                } else {
                    //Sorting by Descending order
                    tableArr.sort((a, b) => (a.Date < b.Date) ? 1 : (a.Date > b.Date) ? -1 : 0)
                    setDateAsc(2)
                }
                break;
            case 'Number':
                if (order === 0 || order === 2) {
                    //Sorting by Ascending order
                    tableArr.sort((a, b) => (a.Number > b.Number) ? 1 : (a.Number < b.Number) ? -1 : 0)
                    setNumberAsc(1)
                } else {
                    //Sorting by Descending order
                    tableArr.sort((a, b) => (a.Number < b.Number) ? 1 : (a.Number > b.Number) ? -1 : 0)
                    setNumberAsc(2)
                }
                break;
            case 'Supplier_Name':
                if (order === 0 || order === 2) {
                    //Sorting by Ascending order
                    tableArr.sort((a, b) => (a.Supplier_Name > b.Supplier_Name) ? 1 : (a.Supplier_Name < b.Supplier_Name) ? -1 : 0)
                    setSupplierNameAsc(1)
                } else {
                    //Sorting by Descending order
                    tableArr.sort((a, b) => (a.Supplier_Name < b.Supplier_Name) ? 1 : (a.Supplier_Name > b.Supplier_Name) ? -1 : 0)
                    setSupplierNameAsc(2)
                }
                break;
            case 'From_Date':
                if (order === 0 || order === 2) {
                    //Sorting by Ascending order
                    tableArr.sort((a, b) => new Date(a.From_Date) - new Date(b.From_Date))
                    setFromDateAsc(1)
                } else {
                    //Sorting by Descending order
                    tableArr.sort((a, b) => new Date(b.From_Date) - new Date(a.From_Date))
                    setFromDateAsc(2)
                }
                break;
            case 'To_Date':
                if (order === 0 || order === 2) {
                    //Sorting by Ascending order
                    tableArr.sort((a, b) => (a.To_Date > b.To_Date) ? 1 : (a.To_Date < b.To_Date) ? -1 : 0)
                    setToDateAsc(1)
                } else {
                    //Sorting by Descending order
                    tableArr.sort((a, b) => (a.To_Date < b.To_Date) ? 1 : (a.To_Date > b.To_Date) ? -1 : 0)
                    setToDateAsc(2)
                }
                break;
            case 'Status':
                if (order === 0 || order === 2) {
                    //Sorting by Ascending order
                    tableArr.sort((a, b) => (a.Status > b.Status) ? 1 : (a.Status < b.Status) ? -1 : 0)
                    setStatusAsc(1)
                } else {
                    //Sorting by Descending order
                    tableArr.sort((a, b) => (a.Status < b.Status) ? 1 : (a.Status > b.Status) ? -1 : 0)
                    setStatusAsc(2)
                }
                break;
            case 'Quantity':
                if (order === 0 || order === 2) {
                    //Sorting by Ascending order
                    tableArr.sort((a, b) => (a.Quantity > b.Quantity) ? 1 : (a.Quantity < b.Quantity) ? -1 : 0)
                    setQuantityAsc(1)
                } else {
                    //Sorting by Descending order
                    tableArr.sort((a, b) => (a.Quantity < b.Quantity) ? 1 : (a.Quantity > b.Quantity) ? -1 : 0)
                    setQuantityAsc(2)
                }
                break;
            case 'Received':
                if (order === 0 || order === 2) {
                    //Sorting by Ascending order
                    tableArr.sort((a, b) => (a.Received > b.Received) ? 1 : (a.Received < b.Received) ? -1 : 0)
                    setReceivedAsc(1)
                } else {
                    //Sorting by Descending order
                    tableArr.sort((a, b) => (a.Received < b.Received) ? 1 : (a.Received > b.Received) ? -1 : 0)
                    setReceivedAsc(2)
                }
                break;
            case 'In_The_Factory':
                if (order === 0 || order === 2) {
                    //Sorting by Ascending order
                    tableArr.sort((a, b) => (a.In_The_Factory > b.In_The_Factory) ? 1 : (a.In_The_Factory < b.In_The_Factory) ? -1 : 0)
                    setInTheFactoryAsc(1)
                } else {
                    //Sorting by Descending order
                    tableArr.sort((a, b) => (a.In_The_Factory < b.In_The_Factory) ? 1 : (a.In_The_Factory > b.In_The_Factory) ? -1 : 0)
                    setInTheFactoryAsc(2)
                }
                break;
            case 'On_The_Way':
                if (order === 0 || order === 2) {
                    //Sorting by Ascending order
                    tableArr.sort((a, b) => (a.On_The_Way > b.On_The_Way) ? 1 : (a.On_The_Way < b.On_The_Way) ? -1 : 0)
                    setOnTheWayAsc(1)
                } else {
                    //Sorting by Descending order
                    tableArr.sort((a, b) => (a.On_The_Way < b.On_The_Way) ? 1 : (a.On_The_Way > b.On_The_Way) ? -1 : 0)
                    setOnTheWayAsc(2)
                }
                break;
            default:
                break;
        }
        setTable(tableArr)
    }

    const createFixedDate = (date) => {
        let newDate = date.split('-')[2] + '/'
        newDate += date.split('-')[1] + '/'
        newDate += date.split('-')[0]
        return newDate
    }

    const getFilters = () => {
        let filtersArr = []
        clientIdFilter.length !== 0 ? filtersArr.push(clientIdFilter) : filtersArr.push(null)
        clientNameFilter.length !== 0 ? filtersArr.push(clientNameFilter) : filtersArr.push(null)
        dateFilter.length !== 0 ? filtersArr.push(createFixedDate(dateFilter)) : filtersArr.push(null)
        numberFilter.length !== 0 ? filtersArr.push(numberFilter) : filtersArr.push(null)
        supplierFilter.length !== 0 ? filtersArr.push(supplierFilter) : filtersArr.push(null)
        fromDateFilter.length !== 0 ? filtersArr.push(createFixedDate(fromDateFilter)) : filtersArr.push(null)
        toDateFilter.length !== 0 ? filtersArr.push(createFixedDate(toDateFilter)) : filtersArr.push(null)
        statusFilter.length !== 0 ? filtersArr.push(statusFilter) : filtersArr.push(null)
        quantityFilter.length !== 0 ? filtersArr.push(quantityFilter) : filtersArr.push(null)
        received.length !== 0 ? filtersArr.push(received) : filtersArr.push(null)
        inTheFactory.length !== 0 ? filtersArr.push(inTheFactory) : filtersArr.push(null)
        onTheWay.length !== 0 ? filtersArr.push(onTheWay) : filtersArr.push(null)
        return filtersArr;
    }

    const resetClientId = () => {
        document.getElementById('clientId').value = ''
        setClientIdFilter('')
    }

    const resetClientName = () => {
        document.getElementById('clientName').value = ''
        setClientNameFilter('')
    }

    const resetDate = () => {
        document.getElementById('date').value = ''
        setDateFilter('')
    }

    const resetNumber = () => {
        document.getElementById('numberFilter').value = ''
        setNumberFilter('')
    }
    const resetSupplierName = () => {
        document.getElementById('supplierName').value = ''
        setSupplierFilter('')
    }

    const resetFromDate = () => {
        document.getElementById('fromDate').value = ''
        setFromDateFilter('')
    }

    const resetToDate = () => {
        document.getElementById('toDate').value = ''
        setToDateFilter('')
    }

    const resetStatus = () => {
        document.getElementById('status').value = ''
        setStatusFilter('')
    }

    const resetQuantity = () => {
        document.getElementById('quantity').value = ''
        setQuantityFilter('')
    }

    const resetRecieved = () => {
        document.getElementById('received').value = ''
        setReceived('')
    }

    const resetInTheFactory = () => {
        document.getElementById('inTheFactory').value = ''
        setInTheFactory('')
    }

    const resetOnTheWay = () => {
        document.getElementById('onTheWay').value = ''
        setOnTheWay('')
    }

    const getFiltersRow = () => {
        return <tr key='1000000'>
            <td><input type="number" style={{ width: '100px' }} id="clientId" placeholder='Contains' name="clientId" onChange={(e) => { setClientIdFilter(e.target.value) }} />
                <button onClick={() => resetClientId()} type="button" class="btn btn-default btn-sm"> <i className="fa fa-trash" aria-hidden="true"></i>
                </button></td>
            <td><input type="text" style={{ width: '100px' }} id="clientName" placeholder='Contains' name="clientName" onChange={(e) => { setClientNameFilter(e.target.value) }} />
                <button onClick={() => resetClientName()} type="button" class="btn btn-default btn-sm"> <i className="fa fa-trash" aria-hidden="true"></i>
                </button></td>
            <td><input type="date" id="date" style={{ width: '140px' }} name="date" onChange={(e) => { setDateFilter(e.target.value) }} />
                <button onClick={() => resetDate()} type="button" class="btn btn-default btn-sm"> <i className="fa fa-trash" aria-hidden="true"></i>
                </button></td>
            <td><input type="text" style={{ width: '100px' }} id="numberFilter" placeholder='Contains' name="numberFilter" onChange={(e) => { setNumberFilter(e.target.value) }} />
                <button onClick={() => resetNumber()} type="button" class="btn btn-default btn-sm"> <i className="fa fa-trash" aria-hidden="true"></i>
                </button></td>
            <td ><input type="text" style={{ width: '100px' }} id="supplierName" placeholder='Contains' name="supplierName" onChange={(e) => { setSupplierFilter(e.target.value) }} />
                <button onClick={() => resetSupplierName()} type="button" class="btn btn-default btn-sm"> <i className="fa fa-trash" aria-hidden="true"></i>
                </button></td>
            <td><input type="date" style={{ width: '140px' }} id="fromDate" name="fromDate" onChange={(e) => { setFromDateFilter(e.target.value) }} />
                <button onClick={() => resetFromDate()} type="button" class="btn btn-default btn-sm"> <i className="fa fa-trash" aria-hidden="true"></i>
                </button></td>
            <td><input type="date" id="toDate" style={{ width: '140px' }} name="toDate" onChange={(e) => { setToDateFilter(e.target.value) }} />
                <button onClick={() => resetToDate()} type="button" class="btn btn-default btn-sm"> <i className="fa fa-trash" aria-hidden="true"></i>
                </button></td>
            <td><input type="text" style={{ width: '100px' }} id="status" placeholder='Contains' name="status" onChange={(e) => { setStatusFilter(e.target.value) }} />
                <button onClick={() => resetStatus()} type="button" class="btn btn-default btn-sm"> <i className="fa fa-trash" aria-hidden="true"></i>
                </button></td>
            <td><input type="number" style={{ width: '100px' }} id="quantity" placeholder='Equals' name="quantity" onChange={(e) => { setQuantityFilter(e.target.value) }} />
                <button onClick={() => resetQuantity()} type="button" class="btn btn-default btn-sm"> <i className="fa fa-trash" aria-hidden="true"></i>
                </button></td>
            <td><input type="number" id="received" style={{ width: '100px' }} placeholder='Equals' name="received" onChange={(e) => { setReceived(e.target.value) }} />
                <button onClick={() => resetRecieved()} type="button" class="btn btn-default btn-sm"> <i className="fa fa-trash" aria-hidden="true"></i>
                </button></td>
            <td><input type="number" style={{ width: '100px' }} id="inTheFactory" placeholder='Equals' name="inTheFactory" onChange={(e) => { setInTheFactory(e.target.value) }} />
                <button onClick={() => resetInTheFactory()} type="button" class="btn btn-default btn-sm"> <i className="fa fa-trash" aria-hidden="true"></i>
                </button></td>
            <td><input type="number" id="onTheWay" style={{ width: '100px' }} placeholder='Equals' name="onTheWay" onChange={(e) => { setOnTheWay(e.target.value) }} />
                <button onClick={() => resetOnTheWay()} type="button" class="btn btn-default btn-sm"> <i className="fa fa-trash" aria-hidden="true"></i>
                </button></td>
        </tr>
    }

    const getRow = (item, index) => {
        //return a row with all data
        return <tr key={index}>
            <td>{item.Client_ID}</td>
            <td>{item.Client_Name}</td>
            <td>{item.Date}</td>
            <td>{item.Number}</td>
            <td>{item.Supplier_Name}</td>
            <td>{item.From_Date}</td>
            <td>{item.To_Date}</td>
            <td>{item.Status}</td>
            <td>{item.Quantity}</td>
            <td>{item.Received}</td>
            <td>{item.In_The_Factory}</td>
            <td>{item.On_The_Way}</td>
        </tr>
    }

    const willBeDisplayed = (row) => {
        let filtersArr = getFilters();
        if (filtersArr[0] !== null) {
            if (!row['Client_ID'].toString().includes(filtersArr[0])) {
                return false;
            }
        }
        if (filtersArr[1] !== null) {
            if (!row['Client_Name'].toLowerCase().includes(filtersArr[1])) {
                return false;
            }
        }
        if (filtersArr[2] !== null) {
            if (row['Date'] != filtersArr[2]) {
                return false;
            }
        }
        if (filtersArr[3] !== null) {
            if (!row['Number'].toLowerCase().includes(filtersArr[3])) {
                return false;
            }
        }
        if (filtersArr[4] !== null) {
            if (!row['Supplier_Name'].toLowerCase().includes(filtersArr[4])) {
                return false;
            }
        }
        if (filtersArr[5] !== null) {
            if (row['From_Date'] != filtersArr[5]) {
                return false;
            }
        }
        if (filtersArr[6] !== null) {
            if (row['To_Date'] != filtersArr[6]) {
                return false;
            }
        }
        if (filtersArr[7] !== null) {
            if (!row['Status'].toLowerCase().includes(filtersArr[7])) {
                return false;
            }
        }
        if (filtersArr[8] !== null) {
            if (row['Quantity'] != filtersArr[8]) {
                return false;
            }
        }
        if (filtersArr[9] !== null) {
            if (row['Received'] != filtersArr[9]) {
                return false;
            }
        }
        if (filtersArr[10] !== null) {
            if (row['In_The_Factory'] != filtersArr[10]) {
                return false;
            }
        }
        if (filtersArr[11] !== null) {
            if (row['On_The_Way'] != filtersArr[11]) {
                return false;
            }
        }
        return true
    }

    let clientIdClassArrow = clientIdAsc === 0 ? '' : clientIdAsc === 1 ? 'up-arrow' : 'down-arrow'
    let clientNameClassArrow = clientNameAsc === 0 ? '' : clientNameAsc === 1 ? 'up-arrow' : 'down-arrow'
    let dateClassArrow = dateAsc === 0 ? '' : dateAsc === 1 ? 'up-arrow' : 'down-arrow'
    let numberClassArrow = numberAsc === 0 ? '' : numberAsc === 1 ? 'up-arrow' : 'down-arrow'
    let supplierNameClassArrow = supplierNameAsc === 0 ? '' : supplierNameAsc === 1 ? 'up-arrow' : 'down-arrow'
    let fromDateClassArrow = fromDateAsc === 0 ? '' : fromDateAsc === 1 ? 'up-arrow' : 'down-arrow'
    let toDateClassArrow = toDateAsc === 0 ? '' : toDateAsc === 1 ? 'up-arrow' : 'down-arrow'
    let statusClassArrow = statusAsc === 0 ? '' : statusAsc === 1 ? 'up-arrow' : 'down-arrow'
    let quantityClassArrow = quantityAsc === 0 ? '' : quantityAsc === 1 ? 'up-arrow' : 'down-arrow'
    let receivedClassArrow = receivedAsc === 0 ? '' : receivedAsc === 1 ? 'up-arrow' : 'down-arrow'
    let inTheFactoryClassArrow = inTheFactoryAsc === 0 ? '' : inTheFactoryAsc === 1 ? 'up-arrow' : 'down-arrow'
    let onTheWayClassArrow = onTheWayAsc === 0 ? '' : onTheWayAsc === 1 ? 'up-arrow' : 'down-arrow'

    let tableToRender; //Getting data from array to be inserted into table
    if (table.length !== 0) {
        tableToRender = <table border='1'>
            {/* Creating table header */}
            <thead>
                <tr>
                    <th onClick={() => { sortTable('Client_ID', clientIdAsc) }}>Client ID <label class={clientIdClassArrow}></label> </th>
                    <th onClick={() => { sortTable('Client_Name', clientNameAsc) }}>Client Name <label class={clientNameClassArrow}></label></th>
                    <th onClick={() => { sortTable('Date', dateAsc) }}>Date <label class={dateClassArrow}></label></th>
                    <th onClick={() => { sortTable('Number', numberAsc) }}>Number <label class={numberClassArrow}></label></th>
                    <th onClick={() => { sortTable('Supplier_Name', supplierNameAsc) }}>Supplier Name <label class={supplierNameClassArrow}></label></th>
                    <th onClick={() => { sortTable('From_Date', fromDateAsc) }}>From Date <label class={fromDateClassArrow}></label></th>
                    <th onClick={() => { sortTable('To_Date', toDateAsc) }}>To Date <label class={toDateClassArrow}></label></th>
                    <th onClick={() => { sortTable('Status', statusAsc) }}>Status <label class={statusClassArrow}></label></th>
                    <th onClick={() => { sortTable('Quantity', quantityAsc) }}>Quantity <label class={quantityClassArrow}></label></th>
                    <th onClick={() => { sortTable('Received', receivedAsc) }}>Received <label class={receivedClassArrow}></label></th>
                    <th onClick={() => { sortTable('In_The_Factory', inTheFactoryAsc) }}>In The Factory <label class={inTheFactoryClassArrow}></label></th>
                    <th onClick={() => { sortTable('On_The_Way', onTheWayAsc) }}>On The Way <label class={onTheWayClassArrow}></label></th>
                </tr>
            </thead>
            <tbody>
                {getFiltersRow()}
                {getFilters().every((filter) => filter === null) ? table.map((item, index) => {
                    return getRow(item, index)
                }) :
                    table.map((item, index) => {
                        if (willBeDisplayed(item)) {
                            return getRow(item, index)
                        }
                    })
                }
            </tbody>
        </table>
    }

    return (<div> <br />
        <h1>Table</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {tableToRender}
        </div>
    </div>)
}

export default TableComp