/* 
	1.该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
	2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
*/
import {SETPARAMS,SETDATAS} from '../constant'

const initState = {} //初始化状态
export default function countReducer(preState=initState,action){
	// console.log('countReducer@#@#@#');
	//从action对象中获取：type、data
	const {type,data} = action
	//根据type决定如何加工数据
	switch (type) {
		case SETPARAMS:
			return { ...preState, param: data }
		case SETDATAS:
			console.log('SETDATAS',data);
			return {...preState,datas:data}
		default:
			return preState
	}
}