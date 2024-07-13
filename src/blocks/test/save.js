import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	return (
		<div {...useBlockProps.save()}>
			<RichText.Content tagName="p" value={ attributes.paragraph } />
		</div>
	);
}