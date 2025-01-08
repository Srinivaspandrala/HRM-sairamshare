import React, { useState } from 'react';
import './Leave.css';

const LeaveForm = () => {
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [fromTime, setFromTime] = useState('');
    const [toTime, setToTime] = useState('');
    const [leaveType, setLeaveType] = useState('');
    const [reason, setReason] = useState('');
    const [balanceLeave, setBalanceLeave] = useState(5);
    const [unpaidLeave, setUnpaidLeave] = useState(0);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const today = new Date();
        const selectedDate = new Date(fromDate);
        const difference = Math.ceil((selectedDate.getTime() - today.getTime()) / (1000 * 3600 * 24));

        if (difference < 10) {
            setError('You can apply for leave only 10 days in advance.');
            return;
        }

        alert('Leave Applied Successfully');
        setError('');
    };

    return (
        <div className="leave-form-container">
            <h2>Apply for Leave</h2>
            <p>Leave Can be Applied 10Days before </p>
            <div className="balance-section">
                <p>Balance Leave: {balanceLeave}</p>
                <p>Unpaid Leave: {unpaidLeave}</p>
            </div>
            <form onSubmit={handleSubmit}>
                
                {/* Dates Section */}
                <div className="date-time-container">
                    <div className="date-time-column">
                        <label>From Date</label>
                        <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} required />
                    </div>
                    <div className="date-time-column">
                        <label>To Date</label>
                        <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} required />
                    </div>
                </div>

                {/* Times Section */}
                <div className="date-time-container">
                    <div className="date-time-column">
                        <label>From Time</label>
                        <input type="time" value={fromTime} onChange={(e) => setFromTime(e.target.value)} required />
                    </div>
                    <div className="date-time-column">
                        <label>To Time</label>
                        <input type="time" value={toTime} onChange={(e) => setToTime(e.target.value)} required />
                    </div>
                </div>

                {/* Leave Type and Reason */}
                <label>Leave Type</label>
                <select value={leaveType} onChange={(e) => setLeaveType(e.target.value)} required>
                    <option value="">Select Leave Type</option>
                    <option value="Paid Leave">Paid Leave</option>
                    <option value="Unpaid Leave">Unpaid Leave</option>
                </select>

                <label>Reason</label>
                <textarea value={reason} onChange={(e) => setReason(e.target.value)} required />

                <button type="submit" className="submit-btn">Submit</button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
};

export default LeaveForm;