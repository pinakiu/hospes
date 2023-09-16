import { motion } from "framer-motion"

const Loading = () => {
    return (
        <div className="loading">
        <motion.div
          className="dots"
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        ></motion.div>
      </div>
    )
}

export default Loading
