import React from 'react'
import API from '../services/Api'

const Reach = () => {
  const [reach, setReach] = React.useState({})

  const fetchReach = () => {
    API.GET('reach')
      .then((data) => {
        setReach(data)
      })
      .catch((err) => {
        console.error(`Something went wrong: ${err.message}`)
      })
  }

  React.useEffect(() => {
    fetchReach()
  }, [])

  return (
    <div className='pt-5 bg-white'>
      <div className='container pb-5'>
        <h4 className='font-weight-bold'>Our Audience</h4>
        <div className='row mt-0 mt-md-4'>
          <div className='col-md-4 mt-4 mt-md-0'>
            <strong className='display-4 font-weight-bold text-primary'>
              {reach['followers']}
            </strong>
            <p>
              <strong>Followers</strong>
              <br />
              <span className='text-muted'>on our social media platforms.</span>
            </p>
          </div>
          <div className='col-md-4 mt-4 mt-md-0'>
            <strong className='display-4 font-weight-bold text-primary'>
              {reach['speakers']}
            </strong>
            <p>
              <strong>Speakers</strong>
              <br />
              <span className='text-muted'>at our events to date.</span>
            </p>
          </div>
          <div className='col-md-4 mt-4 mt-md-0'>
            <strong className='display-4 font-weight-bold text-primary'>
              {reach['subscribers']}
            </strong>
            <p>
              <strong>Subscribers</strong>
              <br />
              <span className='text-muted'>on our mailing list.</span>
            </p>
          </div>
        </div>
      </div>
      {/* <hr />
      <button className="btn btn-link bg-dark text-white py-3 text-center border-radius-0 w-100">
        Download our prospectus&nbsp;&#x25BE;
      </button> */}
      <hr />
    </div>
  )
}

export default Reach
