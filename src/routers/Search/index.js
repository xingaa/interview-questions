
import React, { useState, useEffect, useRef, ReactDOM } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { TextField, IconButton, Card, Skeleton, CardMedia } from '@mui/material';
import { Search } from '@mui/icons-material';
import styles from './index.module.scss'
import img1 from '../../assets/images/13.jpg'
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
import { setParams, setDatas, getDatas } from '../../redux/actions/count'

function SearchCom(props) {
    const { setParams, setDatas, getDatas, param } = props
    const iRef = useRef()
    const navigate = useNavigate()
    // const info = useParams()
    const goSearch = () => {
        navigate('/search/' + iRef.current.value)
        setDatas([])
        getDatas()
    }
    useEffect(() => {
        getDatas()
        return () => {
            setDatas([])
        }
    }, [])
    return (
        <div className={styles.search}>
            <div className={styles.header}>
                <span className={styles.icon}>BestSearch</span>
                <TextField
                    style={{ flex: "1" }}
                    id="outlined-basic"
                    // label="search your want"
                    variant="outlined"
                    inputRef={iRef}
                    value={param}
                    onChange={(event) => setParams(event.target.value)}
                />
                <IconButton aria-label="delete" size='large' onClick={goSearch}>
                    <Search />
                </IconButton>
            </div>
            <div className={styles.contents}>
                {props.datas && props.datas.length > 0 ? props.datas.map(item => {
                    return (
                        <Card
                            key={item.id}
                            className={styles.card}
                        >
                            <CardMedia
                                component="img"
                                height="160"
                                image={item.image || img1}
                                alt={item.title}
                            />
                            <div className={styles.itemTitle} title={item.title}>{item.title}</div>
                            <div className={styles.itemPrice} title={item.price}>{item.price}</div>
                        </Card>
                    )
                }) : (
                    <div className={styles.loading}>
                        <div className={styles.loadingCard}>
                            <Skeleton variant="rectangular" width={'100%'} height={120} />
                            <Skeleton />
                            <Skeleton width="60%" />
                        </div>
                        <div className={styles.loadingCard}>
                            <Skeleton variant="rectangular" width={'100%'} height={120} />
                            <Skeleton />
                            <Skeleton width="60%" />
                        </div>
                        <div className={styles.loadingCard}>
                            <Skeleton variant="rectangular" width={'100%'} height={120} />
                            <Skeleton />
                            <Skeleton width="60%" />
                        </div>
                        <div className={styles.loadingCard}>
                            <Skeleton variant="rectangular" width={'100%'} height={120} />
                            <Skeleton />
                            <Skeleton width="60%" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default connect(
    state => ({
        datas: state.count.datas,
        param: state.count.param
    }),
    { setParams, setDatas, getDatas }
)(SearchCom)