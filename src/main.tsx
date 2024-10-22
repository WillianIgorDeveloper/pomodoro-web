import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { HomePage } from "@pages/home"
import { NotFoundPage } from "@pages/not-found"
import { BrowserRouter, Route, Routes } from "react-router-dom"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
