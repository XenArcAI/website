
import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useAnimation } from "framer-motion"

export function XLogo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const controls = useAnimation()
  
  const springConfig = { stiffness: 50, damping: 15, mass: 1 }
  
  const scale = useSpring(useTransform(scrollY, [0, 300], [1, 0.8]), springConfig)
  const y = useSpring(useTransform(scrollY, [0, 300], [0, 50]), springConfig)
  const opacity = useSpring(useTransform(scrollY, [0, 300], [1, 0.3]), springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height
      
      mouseRef.current = { x, y }
      
      controls.start({
        x: x * 20,
        y: y * 20,
        rotateX: y * 10,
        rotateY: -x * 10,
        transition: { type: "spring", ...springConfig }
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [controls, springConfig])

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      style={{ y, opacity }}
      className="relative w-full max-w-7xl mx-auto perspective-1000"
    >
      <motion.div
        style={{ scale }}
        animate={controls}
        className="relative text-center"
      >
        <motion.div
          className="text-[3rem] md:text-[5rem] font-bold text-white/20 blur-[80px] absolute inset-0 select-none"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          XenArcAI
        </motion.div>
        <motion.div
          className="text-[3rem] md:text-[5rem] font-bold text-white/40 blur-[40px] absolute inset-0 select-none"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          XenArcAI
        </motion.div>
        <motion.div
          className="text-[3rem] md:text-[5rem] font-bold text-white relative z-10 select-none"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          XenArcAI
        </motion.div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/30 to-white/30 mix-blend-overlay blur-[100px] transform scale-150" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/20 to-white/20 mix-blend-screen blur-[50px]" />
        </div>
      </motion.div>
    </motion.div>
  )
}
