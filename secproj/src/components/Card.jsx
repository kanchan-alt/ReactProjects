

function Card({details}) {
    // console.log(props);
  return (
    <div className="card" style={{width: "18rem"}}>
  <img src={details.picture?.large} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{details.name?.first}-{details.phone}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">G0 Goa</a>
  </div>
</div>
  )
}

export default Card;


// function Card({name, imgUrl, btn}) {
//   // console.log(props);
// return (
//   <div className="card" style={{width: "18rem"}}>
// <img src={imgUrl} className="card-img-top" alt="..."/>
// <div className="card-body">
//   <h5 className="card-title">HC-{name}</h5>
//   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   <a href="#" className="btn btn-primary">{btn}</a>
// </div>
// </div>
// )
// }