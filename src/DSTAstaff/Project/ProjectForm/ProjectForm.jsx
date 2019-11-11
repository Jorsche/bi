// import React from "react";
// import PropTypes from 'prop-types';
// import { Add, Delete, Save} from "@material-ui/icons";
// import {Link} from "react-router-dom";
// import {Button} from 'semantic-ui-react';



// export const ProjectForm=({name, price, onChange, onSubmit})=>{
//     return(
//         <div className="row justify-content-center">
//             <form className="form-inline" onSubmit={onSubmit}>
//                 <label>
//                     Project Name:
//                 <input
//                     type="text"
//                     className="form-control mb-2 mr-sm-2"
//                     value={name}
//                     name="name"
//                     onChange={onChange}
//                 />
//                 </label>

//                 <div className="input-group mb-2 mr-sm-2">
//                     <label>
//                         Contractor
//                     <input
//                         type="text"
//                         className="form-control"
//                         value={price}
//                         name="price"
//                         onChange={onChange}
//                     />
//                     </label>
//                 </div>

//                 <div className="input-group mb-2 mr-sm-3">
//                     <label>
//                       Browse Files
//                         <input
//                             type="text"
//                             className="form-control"
//                             value={price}
//                             name="price"
//                             onChange={onChange}
//                         />
//                     </label>
//                 </div>
//                 <Link to={"/DSTA_mian"}>
//                 <Button primary>Save</Button>

//                     </Link>
//             </form>
//         </div>

//     );

//     ProjectForm.propTypes = {
//         name: PropTypes.string.isRequired,
//         price: PropTypes.string.isRequired,
//         onChange: PropTypes.func.isRequired,
//         onSubmit: PropTypes.func.isRequired,
//     };






// }