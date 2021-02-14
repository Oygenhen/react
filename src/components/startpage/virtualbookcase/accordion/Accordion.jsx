import React from 'react';
import './Accordion.css';
import { Accordion, AccordionItem, AccordionItemBody } from 'react-accordion-container';

function Accordionbook (props) {
  return (
    <Accordion className="accordion">
      <AccordionItem className="accordion_item">
        {({isActive, onClick}) => (
          <div>
            <div className="accordion_header">
              <h3 className="accordion_title" role="button" onClick={onClick}>
                Прочитанное
              </h3>
            </div>
            <AccordionItemBody className="accordion_content">
              <p>Поможет книголюбам упорядочить список прочитанных книг.</p>
            </AccordionItemBody>
          </div>
        )}
      </AccordionItem>
      <AccordionItem className="accordion_item">
        {({isActive, onClick}) => (
          <div>
            <div className="accordion_header">
              <h3 className="accordion_title" role="button" onClick={onClick}>
                Хочу прочитать
              </h3>
            </div>
            <AccordionItemBody className="accrdion_content">
              <p>Если вы просто покупаете больше книг, чем успеваете читать, тогда для вас есть хорошие новости.
                Здесь вы можете составлять список книг, которые очень хотели бы почитать, когда у вас найдется свободное
                время.</p>
            </AccordionItemBody>
          </div>
        )}
      </AccordionItem>
      <AccordionItem className="accordion_item">
        {({isActive, onClick}) => (
          <div>
            <div className="accordion_header">
              <h3 className="accordion_title" role="button" onClick={onClick}>
                Хочу купить
              </h3>
            </div>
            <AccordionItemBody className="accordion_content">
              <p>Обилие смартфонов, электронных читалок и планшетов сказывается на потере интереса к бумажным книгам. И
                правда – вместо того, чтобы забивать полки дома или рюкзак в дорогу,
                гораздо проще скачать десятки книг на небольшое устройство, которое всегда с тобой. Однако у каждого из
                нас есть те книги, шум страниц которых приносит огромое удовольствиею
                А это значит, что список книг, которые хотелось бы купить как раз кстати!</p>
            </AccordionItemBody>
          </div>
        )}
      </AccordionItem>
    </Accordion>

  );
}

export default Accordionbook;