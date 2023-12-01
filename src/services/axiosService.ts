import axios from "axios";

import {baseURL} from "../urls";

const axiosService=axios.create({baseURL})

export {axiosService}