import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import g from 'glamorous';
import { css } from 'glamor';
import Link from 'gatsby-link';

import { rhythm } from '../utils/typography';

import Header from '../components/Header'
import './index.css'

const linkStyle = css({ float: 'right' });

const TemplateWrapper = ({ children }) => {
    return (
        <div>
            <g.H1 display={'inline-block'} borderBottom={'1px solid'}>
                Amazing Pandas eating things
            </g.H1>

            { children() }
        </div>
    );
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
