

const Main = () => {

  return (
     <>
    <div className="header bg-gradient-primary pb-8 pt-5 pt-md-8">
  <div className="container-fluid">
    <div className="header-body">

      <div className="row">
        <div className="col-xl-3 col-lg-6 float-right">
          <div className="card card-stats mb-4 mb-xl-0">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <h5 className="card-title text-uppercase text-muted mb-0">Traffic</h5>
                  <span className="h2 font-weight-bold mb-0">350,897</span>
                </div>
                <div className="col-auto">
                  <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                    <i className="fas fa-chart-bar" />
                  </div>
                </div>
              </div>
              <p className="mt-3 mb-0 text-muted text-sm">
                <span className="text-success mr-2"><i className="fa fa-arrow-up" /> 3.48%</span>
                <span className="text-nowrap">Since last month</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6">
          <div className="card card-stats mb-4 mb-xl-0">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <h5 className="card-title text-uppercase text-muted mb-0">New users</h5>
                  <span className="h2 font-weight-bold mb-0">2,356</span>
                </div>
                <div className="col-auto">
                  <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                    <i className="fas fa-chart-pie" />
                  </div>
                </div>
              </div>
              <p className="mt-3 mb-0 text-muted text-sm">
                <span className="text-danger mr-2"><i className="fas fa-arrow-down" /> 3.48%</span>
                <span className="text-nowrap">Since last week</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6">
          <div className="card card-stats mb-4 mb-xl-0">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <h5 className="card-title text-uppercase text-muted mb-0">Sales</h5>
                  <span className="h2 font-weight-bold mb-0">924</span>
                </div>
                <div className="col-auto">
                  <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                    <i className="fas fa-users" />
                  </div>
                </div>
              </div>
              <p className="mt-3 mb-0 text-muted text-sm">
                <span className="text-warning mr-2"><i className="fas fa-arrow-down" /> 1.10%</span>
                <span className="text-nowrap">Since yesterday</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6">
          <div className="card card-stats mb-4 mb-xl-0">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <h5 className="card-title text-uppercase text-muted mb-0">Performance</h5>
                  <span className="h2 font-weight-bold mb-0">49,65%</span>
                </div>
                <div className="col-auto">
                  <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                    <i className="fas fa-percent" />
                  </div>
                </div>
              </div>
              <p className="mt-3 mb-0 text-muted text-sm">
                <span className="text-success mr-2"><i className="fas fa-arrow-up" /> 12%</span>
                <span className="text-nowrap">Since last month</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

<div className="mt-5">
  <div className="col-xl-12 mb-2 mb-xl-0">
    <div className="card shadow">
      <div className="card-header border-0">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="mb-0">Page visits</h3>
          </div>
          <div className="col text-right">
            <a href="#!" className="btn btn-sm btn-primary">See all</a>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table align-items-center table-flush">
          <thead className="thead-light">
            <tr>
              <th scope="col">Page name</th>
              <th scope="col">Visitors</th>
              <th scope="col">Unique users</th>
              <th scope="col">Bounce rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                /argon/
              </th>
              <td>
                4,569
              </td>
              <td>
                340
              </td>
              <td>
                <i className="fas fa-arrow-up text-success mr-3" /> 46,53%
              </td>
            </tr>
            <tr>
              <th scope="row">
                /argon/index.html
              </th>
              <td>
                3,985
              </td>
              <td>
                319
              </td>
              <td>
                <i className="fas fa-arrow-down text-warning mr-3" /> 46,53%
              </td>
            </tr>
            <tr>
              <th scope="row">
                /argon/charts.html
              </th>
              <td>
                3,513
              </td>
              <td>
                294
              </td>
              <td>
                <i className="fas fa-arrow-down text-warning mr-3" /> 36,49%
              </td>
            </tr>
            <tr>
              <th scope="row">
                /argon/tables.html
              </th>
              <td>
                2,050
              </td>
              <td>
                147
              </td>
              <td>
                <i className="fas fa-arrow-up text-success mr-3" /> 50,87%
              </td>
            </tr>
            <tr>
              <th scope="row">
                /argon/profile.html
              </th>
              <td>
                1,795
              </td>
              <td>
                190
              </td>
              <td>
                <i className="fas fa-arrow-down text-danger mr-3" /> 46,53%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

</div>


  



</div>

      
    </>
     )
     };

     export default Main 