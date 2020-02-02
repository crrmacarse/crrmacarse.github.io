import React from 'react';

const Contact = ({ translate }: { translate: any }) => (
  <ul className="lg:w-1/6 w-1/2 p-3">
    <h4 className="font-bold mb-2">{translate('Get in touch')}</h4>
    <li><a href="tel:+6399159039234">{translate('Call')}</a></li>
    <li><a href="https://github.com/crrmacarse">Github</a></li>
    <li><a href="https://stackoverflow.com/users/10030210/crrmacarse">Stack Overflow</a></li>
    <li><a href="https://www.linkedin.com/in/christian-ryan-r-macarse-692974166/">LinkedIn</a></li>
    <li><a href="https://twitter.com/pablongbuhaymo">Twitter</a></li>
  </ul>
);

export default Contact;
