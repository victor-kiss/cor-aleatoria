import React from 'react'
import NextHead from 'next/head'
export default function head({title}) {
    return (
        <>
            <NextHead>
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8"/>
                <meta charSet="UTF-8"/>
                <meta name="author" content="Victor Kiss"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
               
                <title>{title}</title>
            </NextHead>
        </>
    )
}
