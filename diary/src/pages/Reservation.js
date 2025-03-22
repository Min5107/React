import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Reservation() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [oneDayAfterStartDate, setOneDayAfterStartDate] = useState(null);

  // 오늘 날짜 (UTC 기준)
  const today = new Date(Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), new Date().getHours(), new Date().getMinutes()));

  // 일주일 후 날짜 (UTC 기준)
  const oneWeekLater = new Date(today);
  oneWeekLater.setDate(today.getDate() + 7);

  useEffect(() => {
    if (startDate) {
      const newDate = new Date(startDate.getTime() + 24 * 60 * 60 * 1000); // 24시간 더하기
      setOneDayAfterStartDate(newDate);
    }
  }, [startDate]);

  return (
    <div>
      <h2>24시간 예약 시스템</h2>
      <div>
        시작 시간: 
        <DatePicker
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
            setEndDate(null); // 시작 시간 변경 시, 종료 시간 초기화
          }}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={60}
          timeCaption="시간"
          dateFormat="yyyy-MM-dd HH:mm"
          minDate={today}
          maxDate={oneWeekLater}
        />
      </div>
      <div>
      종료 시간:
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={60}
        timeCaption="시간"
        dateFormat="yyyy-MM-dd HH:mm"
        minDate={startDate}
        filterTime={(time) => {
          if (!startDate) return true; // 시작 시간이 선택되지 않았다면 모든 시간을 허용
      
          const isAfterStartTime = time.getTime() > startDate.getTime();
          const isBeforeOneDayAfterStartDate = time.getTime() < oneDayAfterStartDate.getTime();
      
          return isAfterStartTime  && isBeforeOneDayAfterStartDate; // 시작 시간보다 크고, 24시간 이후의 시간보다 작은 시간만 허용
        }}
        filterDate={(date) => {
            if (!startDate) return true; // 시작 시간이 선택되지 않았다면 모든 날짜를 허용
          
            const isAfterStartDate = date.getTime() > startDate.getTime();
            const isBeforeOrOnOneDayAfterStartDate = date.getTime() <= oneDayAfterStartDate.getTime();
          
            return isAfterStartDate && isBeforeOrOnOneDayAfterStartDate; // 시작 날짜보다 크고, 시작 날짜로부터 24시간 이후의 날짜보다 같거나 작은 날짜만 허용
          }}
          
      />
    </div>
    {startDate && endDate && (
      <div>
        선택한 예약 시간: 
        {startDate.toLocaleDateString()} {startDate.toLocaleTimeString()} ~ 
        {endDate.toLocaleDateString()} {endDate.toLocaleTimeString()}
      </div>
    )}
  </div>
);
}

export default Reservation;
