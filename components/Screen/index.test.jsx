import Screen from "./index"
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'


import React from "react"

test('Test Screen', function() {
    render(<Screen />)

    const cursor = screen.getByText("|")
    expect(cursor).toBeInTheDocument()
})