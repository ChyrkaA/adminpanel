import React from "react";

const ConfirmModal = ({modal, target, method, page, time}) => {
        if(target==='modal-delPage'){
                return(
                        <div id={target} uk-modal={modal.toString()} container="false">
                                <div className="uk-modal-dialog uk-modal-body">
                                        <h2 className="uk-modal-title">Удаление</h2>
                                        <p>Вы действительно хотите удалить бекап от {time}?</p>
                                        <p className="uk-text-right">
                                        <button className="uk-button uk-button-default uk-modal-close uk-margin-small-right" type="button">Отменить</button>
                                        <button className="uk-button uk-button-primary uk-modal-close" type="button" onClick={()=>method(page)}>
                                        Удалить</button>
                                        </p>
                                </div>
                        </div>
                )
        } else {
                return(
                        <div id={target} uk-modal={modal.toString()} container="false">
                                <div className="uk-modal-dialog uk-modal-body">
                                        <h2 className="uk-modal-title">Сохранение</h2>
                                        <p>Вы действительно хотите сохранить изменения?</p>
                                        <p className="uk-text-right">
                                        <button className="uk-button uk-button-default uk-modal-close uk-margin-small-right" type="button">Отменить</button>
                                        <button className="uk-button uk-button-primary uk-modal-close" type="button" onClick={()=>method()}>
                                        Опубликовать</button>
                                        </p>
                                </div>
                        </div>
                )
        }       
}

export default ConfirmModal;