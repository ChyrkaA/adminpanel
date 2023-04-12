import axios from "axios";

export default class EditorImages {
        constructor(element, virtualElement, ...[isLoading, isLoaded, showNotifications]){
                this.element = element;
                this.virtualElement = virtualElement;
                
                this.element.addEventListener('click', ()=>this.onClick());
                this.imgUploader = document.querySelector('#img-upload');
                this.isLoading = isLoading;
                this.isLoaded = isLoaded;
                this.showNotifications = showNotifications;

                this.postImg = this.postImg.bind(this);
        }

        postImg (){
                if(this.imgUploader.files && this.imgUploader.files[0]){
                        let formData = new FormData();
                        formData.append('image', this.imgUploader.files[0]);
                        this.isLoading();
                        axios
                                .post('./api/uploadImage.php', formData, {
                                        headers: {
                                                'Content-Type': 'multipart/form-data'
                                        }
                                })
                                .then((res)=>{
                                        this.virtualElement.src = this.element.src = `./img/${res.data.src}`
                                })
                                .then(()=>this.showNotifications('✓ Загрузка прошла успешно', 'success'))
                                .catch(()=>this.showNotifications('✗ Ошибка загрузки изображения', 'danger'))
                                .finally(
                                        this.imgUploader.removeEventListener('change', this.postImg),
                                        this.imgUploader.value = '',
                                        this.isLoaded());
                }
        }

        onClick() {
                this.imgUploader.click();
                this.imgUploader.addEventListener('change', this.postImg)
        }
}