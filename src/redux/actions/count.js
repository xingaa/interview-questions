/* 
	该文件专门为Count组件生成action对象
*/
import {SETPARAMS,SETDATAS} from '../constant'
import axios from 'axios'

//同步action，就是指action的值为Object类型的一般对象
export const setParams = data => ({type:SETPARAMS,data})
export const setDatas = data => ({type:SETDATAS,data})

//异步action，就是指action的值为函数,异步action中一般都会调用同步action，异步action不是必须要用的。
export const getDatas = (params) => {
	return (dispatch, getState) => {
		const {count}=getState('count')
		axios.post(
            'http://3.141.23.218:5000/interview/keyword_search',
            {
                "login_token": "INTERVIEW_SIMPLY2021",
                "search_phrase": count.param ? count.param : "hat",
            }
        ).then(res => {
            dispatch(setDatas(res.data.data.products))
        }).catch(err => {
            console.log('err', err);
        })
	}
}