import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

import { useRenderClient } from '@/hooks/useRenderClient'

import { TypeMaterialIconName } from '@/shared/types/icons.types'

export const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
	
	const { isRenderClient } = useRenderClient()

	const IconComponent = name ? MaterialIcons[name] : null

	if (isRenderClient && IconComponent)
		return <IconComponent /> || <MaterialIcons.MdDragIndicator />
	else return null
}
