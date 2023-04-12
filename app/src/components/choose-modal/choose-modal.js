import React from "react";

const ChooseModal = ({modal, target, data, redirect, onSetPage}) => {

        const list = data.map((item, i)=>{
                if(item.time){   
                        return(
                                <li key={i}>
                                        <a onClick={(e)=>redirect(e, item.file, item.time)} className="uk-link-muted uk-modal-close" href='#'>Резервная копия от: {item.time}</a>
                                        <span data-tooltip="Удалить" uk-toggle="target: #modal-delPage" onClick={()=>onSetPage(item.file, item.time)}>🗑</span>
                                </li>
                        )
                } else {
                        return(
                                <li key={i}>
                                        <a onClick={(e)=>redirect(e, item)} className="uk-link-muted uk-modal-close" href='#'>{item}</a>
                                </li>
                        )
                }
        })

        let msg;
        if(data.length<1){
                msg = <div>Резервные копии не найдены</div>
        }

        return (
                <div id={target} uk-modal={modal.toString()} container="false">
                        <div className="uk-modal-dialog uk-modal-body">
                                <h2 className="uk-modal-title">Открыть</h2>
                                {msg}
                                <ul className="uk-list uk-list-divider">
                                        {list}
                                </ul>
                                <p className="uk-text-right">
                                <button className="uk-button uk-button-default uk-modal-close" type="button">Отменить</button>
                                </p>
                        </div>
                </div>
        )
}

export default ChooseModal;