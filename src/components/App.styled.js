import styled from 'styled-components';

export const StyledAppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;

.searchBar {
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}

.searchForm {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
}
   
.searchFormButton{
  display: inline-block;
  width: 48px;
  height: 35px;
  border: 0;
  background-image: url('https://w7.pngwing.com/pngs/843/729/png-transparent-computer-icons-magnifying-glass-glass-glass-advertising-svg-thumbnail.png');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
}

.searchFormButton:hover {
  opacity: 1;
}

.searchFormButtonLabel {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
}

.SearchForm-input {
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 15px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
}

.SearchForm-input::placeholder {
  font: inherit;
  font-size: 14px;
}

.loader{
  margin-right: auto;
  margin-left: auto;
}

.ImageGallery {
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
}

.ImageGalleryItem {
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
}

.ImageGalleryItem-image {
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.ImageGalleryItem-image:hover {
  transform: scale(1.03);
  cursor: zoom-in;
}

//  Стили компонента Modal
 
.Overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
}

.Modal {
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
}

.largeImg {
  max-width: 100%;
  max-height: 100%; /* Изображение займет всю высоту и ширину модального окна */
  object-fit: contain; /* Изображение будет масштабироваться, чтобы вместиться в окно с сохранением соотношения сторон */
}

// Стили компонента Buton (Load more)

.button {
  margin-right: auto;
  margin-left: auto;
  margin-top:20px;
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.button:hover,
.button:focus {
  background-color: #303f9f;
}

.button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
}`;
