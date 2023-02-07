import AdminActions from './AdminActions/AdminActions'
import { IAdminTableItem } from './admin-table.interface'
import { FC } from 'react'

import styles from './AdminTable.module.scss'

const AdminTableItem: FC<IAdminTableItem> = ({ tableItem, removeHandler }) => {
	return (
		<div className={styles.item}>
			{tableItem.items.map((value, key) => (
				<div key={key}>{value}</div>
			))}

			<AdminActions
				editUrl={tableItem.editUrl}
				removeHandler={() => removeHandler(tableItem._id)}
			/>
		</div>
	)
}

export default AdminTableItem
