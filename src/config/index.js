import Vue from 'vue'
import axios from './interceptors'

Vue.prototype.$http = axios
