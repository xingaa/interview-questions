
import React, { useState, useEffect, useRef, ReactDOM } from 'react'
import { useNavigate  } from "react-router-dom";
import { TextField, IconButton } from '@mui/material';
import {Search} from '@mui/icons-material';
import styles from './index.module.scss'
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
import {setParams} from '../../redux/actions/count'

function Home(props) {
    const iRef = useRef()
    const navigate=useNavigate()
    
    const goSearch = () => {
        navigate('/search/' + iRef.current.value)
        props.setParams(iRef.current.value)
    }
    return (
        <div className={styles.home}>
            <div  className={styles.header}>BestSearch</div>
            <div className={styles.title}>Search Trends</div>
            <div className={styles.searchForm}>
                <TextField
                    className={styles.searchFormInp}
                    label="请输入关键字" variant="outlined"
                    size="small"
                    inputRef={iRef} />
                <IconButton aria-label="delete" size='large' onClick={goSearch}>
                    <Search />
                </IconButton>
            </div>
        </div>
    )
}
// export default Home
//使用connect()()创建并暴露一个Count的容器组件
export default connect(
	state => ({}),
	{setParams}
)(Home)

