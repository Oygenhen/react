import React from 'react';
import './Virtualbookcase.css';
import '../../../common/styles/Container.css';
import '../../../common/styles/Section.css';
import './Virtualbookcase.css';
import Accordionbook from './accordion/Accordion';
import image from '../../../img/books.jpg';

function Virtualbookcase () {
  return (
    <section className="section">
      <div className="container">
        <div className="section_header">
          <h3 className="section_suptitle">bookBar</h3>
          <h2 className="section_title">Виртуальный книжный шкаф</h2>
          <div className="section_text">
            <p>В те дни, когда вам кажется, что вы ничего не читаете и мало стараетесь,
              приятно оглянуться на заполненный трекер книг и убедиться, что на самом деле вы успеваете очень много.
              К тому же такой трекер мотивирует не сдаваться , чтобы не прерывать цепочку достижений.</p>
          </div>
        </div>
      </div>
      <div className="vir_bookcase_container">
        <div className="vir_bookcase_item">
          <img className="vir_img" alt="Картинка" src={image} width="570" height="380"/>
        </div>
        <div className="vir_bookcase_item">
          <Accordionbook/>
        </div>
      </div>
    </section>
  );
}

export default Virtualbookcase;
