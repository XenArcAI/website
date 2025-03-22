
import { motion } from "framer-motion"

export function AILoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
      <div className="relative w-48 h-48">
        {/* Ethereal Smoke Ring */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Secondary Smoke Ring */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-violet-500/20 blur-2xl"
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: 0.5
          }}
        />

        {/* Dynamic Lightning Effects */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border-2 border-white/5"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
              scale: [1, 2],
              opacity: [0.5, 0],
              rotate: [0, 180]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeOut"
            }}
          />
        ))}

        {/* Spreading Smoke Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full bg-white/30 blur-sm"
            style={{
              left: "50%",
              top: "50%",
              transform: `rotate(${i * 30}deg) translateY(-100px)`
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              rotate: [`${i * 30}deg`, `${i * 30 + 180}deg`]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Central Energy Core */}
        <motion.div
          className="absolute inset-0 m-auto w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-md"
          animate={{
            scale: [0.8, 1, 0.8],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  )
}
