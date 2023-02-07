import cn from 'classnames'
import { forwardRef } from 'react'

import { IField } from './form.interface'

import styles from './form.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(
	({ value, placeholder, error, type = 'text', style, ...rest }, ref) => {

		if(value) {
			return (
				<input ref={ref} type={type} {...rest} value='hidden'  />
			)
		}
	
		return (
			<div className={cn(styles.common, styles.field)} style={style}>
				<label>
					<span>{placeholder}</span>
					<input ref={ref} type={type} {...rest}  />
				</label>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
