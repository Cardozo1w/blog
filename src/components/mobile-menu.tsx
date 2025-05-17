"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, User, Briefcase, Mail, ChevronRight, FilePen } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Evitar problemas de hidratación
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
      },
    },
  }

  const menuItems = [
    { title: "Inicio", href: "/", icon: <Home className="w-5 h-5" /> },
    {
      title: "Posts",
      href: "/#posts",
      icon: <FilePen className="w-5 h-5" />,
    },
    {
      title: "Sobre mí",
      href: "/#about-me",
      icon: <User className="w-5 h-5" />,
    },
    {
      title: "Portafolio",
      href: "/portfolio",
      icon: <Briefcase className="w-5 h-5" />,
    },
    { title: "Contacto", href: "#contact", icon: <Mail className="w-5 h-5" /> },
  ];

  if (!mounted) return null


  const currentTheme = theme === "system" ? resolvedTheme : theme
  const isDark = currentTheme === "dark"

  return (
    <div className="relative z-50 lg:hidden">
      {/* Botón de hamburguesa con animación */}
      <motion.button
        onClick={toggleMenu}
        className={`fixed top-3 right-4 z-50 p-2 ${
          isDark ? " text-white" : "text-gray-800"
        }`}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? "close" : "open"}
            initial={{ rotate: 0, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 180, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </AnimatePresence>
      </motion.button>

      {/* Menú desplegable */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay con efecto de desenfoque */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              className={`fixed inset-0 ${isDark ? "bg-black/80" : "bg-gray-500/50"} backdrop-blur-sm`}
              onClick={toggleMenu}
            />

            {/* Contenido del menú */}
            <motion.div
              className={`fixed top-0 right-0 h-screen w-[320px] ${
                isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
              } shadow-2xl p-6 flex flex-col rounded-l-xl`}
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Logo o título del sitio */}
              <div className="mt-10 mb-8">
                <h2 className="text-2xl font-bold">Oscar Cardoso</h2>
                <div className="h-1 w-20 bg-indigo-600 rounded-full mt-2"></div>
              </div>

              {/* Elementos del menú */}
              <div className="flex flex-col space-y-1">
                {menuItems.map((item) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className={`group flex items-center justify-between p-3 rounded-lg ${
                        isDark ? "hover:bg-indigo-900/30 text-gray-100" : "hover:bg-indigo-50 text-gray-800"
                      } transition-all duration-300`}
                      onClick={toggleMenu}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex items-center justify-center w-9 h-9 rounded-lg ${
                            isDark
                              ? "bg-indigo-900/50 text-indigo-300 group-hover:bg-indigo-800 group-hover:text-white"
                              : "bg-indigo-100 text-indigo-600 group-hover:bg-indigo-200"
                          } transition-all duration-300`}
                        >
                          {item.icon}
                        </div>
                        <span className="text-base font-medium">{item.title}</span>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 ${
                          isDark ? "text-gray-400" : "text-gray-500"
                        } group-hover:text-indigo-600 group-hover:translate-x-1 transition-all duration-300`}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Footer del menú */}
              <div className="mt-auto">
                <div className={`pt-6 border-t ${isDark ? "border-gray-700/50" : "border-gray-200"}`}>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                    © {new Date().getFullYear()} Oscar Cardoso
                  </p>
                  <p className={`text-sm mt-1 ${isDark ? "text-gray-400" : "text-gray-500"}`}>Desarrollador Web</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
