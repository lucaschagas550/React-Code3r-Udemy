import './PageTitle.css'
import React from 'react'

interface PageTitleProps {
    title: string
    subtitle: string
    error?: boolean
}

const PageTitle = (props: PageTitleProps) => (
    <div className={`PageTitle ${props.error ? "error" : ""}`}>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
    </div>
);

export default PageTitle;