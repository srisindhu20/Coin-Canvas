import React from 'react';

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div elevation={3} style={{ textAlign: 'center', padding: '0 10%' }}>
      Try saying: <br /> 
      Add Income for ₹100 in Category Salary for Thursday
      {/*{isIncome ? 'Income ' : 'Expense '}*/} 
      {/*for: ₹100<br />*/}
      {/*{isIncome ? '₹100 ' : '₹50 '}*/}
      {/*in Category: Salary<br /> */}
      {/*{isIncome ? 'Salary ' : 'Travel '}*/} 
      {/*for: Thursday<br />*/}
      {/* {isIncome ? 'Monday ' : 'Thursday '}*/}
    </div>
  );
};

export default InfoCard;