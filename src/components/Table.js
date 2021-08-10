import React from 'react';

const Table = ({ rows, data, title, images }) => {

  return (
    <div className="card">
      {
        title &&
        <div className="tabletitle">
          <h4>{title}</h4>
        </div>
      }
      <table>
        <thead>
          {images && (
            <tr>
              {images.map((img, i) => <th className="table_header_img" key={`img-${i}`}><img src={`${process.env.REACT_APP_API_URL}/media/img/${img}`} alt="" /></th>)}
            </tr>
          )}

          <tr>
            {rows && rows.map((head, i) => <th key={i}>{head}</th>)}
          </tr>
        </thead>
        <tbody>
          {data && data.map((dat, i) => (
            <tr key={i}>
              {dat.map((d, i) => (
                <th key={i}>{d}</th>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table;