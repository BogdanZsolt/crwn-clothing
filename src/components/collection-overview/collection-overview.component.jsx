import React from 'react';
import { connect } from 'react-redux';
import { SelectCollectionForPreview } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component';
import './collection-overview.styles.scss';

const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({id, ...otherCollectionProps}) => (
      <CollectionPreview key={id} {...otherCollectionProps}/>
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: SelectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverview);