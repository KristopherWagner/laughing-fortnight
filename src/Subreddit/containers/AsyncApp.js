import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsIfNeeded, invalidateSubreddit, selectSubreddit } from '../actions';
import Picker from '../components/Picker';
import Posts from '../components/Posts';

export default function AsyncApp() {
  const dispatch = useDispatch();
  const invalidate = useCallback(
    (subreddit) => dispatch(invalidateSubreddit(subreddit)), [dispatch]);
  const fetchPosts = useCallback(
    (subreddit) => dispatch(fetchPostsIfNeeded(subreddit)), [dispatch]);
  const newSubreddit = useCallback(
    (subreddit) => dispatch(selectSubreddit(subreddit)), [dispatch]);

  const postsBySubreddit = useSelector((state) => state.postsBySubreddit);
  const selectedSubreddit = useSelector((state) => state.selectedSubreddit);
  const isFetching = postsBySubreddit[selectedSubreddit] ?
    postsBySubreddit[selectedSubreddit].isFetching : false;
  const lastUpdated = postsBySubreddit[selectedSubreddit] ?
    postsBySubreddit[selectedSubreddit].lastUpdated : null;
  const items = postsBySubreddit[selectedSubreddit] ?
    postsBySubreddit[selectedSubreddit].items : [];

  useEffect(() => {
    fetchPosts(selectedSubreddit);
  }, [fetchPosts, selectedSubreddit]);

  const handleChange = (nextSubreddit) => newSubreddit(nextSubreddit);
  const handleRefreshClick = (e) => {
    e.preventDefault();
    invalidate(selectedSubreddit);
    fetchPosts(selectedSubreddit);
  };

  return (
    <div>
      <Picker
        value={selectedSubreddit}
        onChange={handleChange}
        options={[ 'reactjs', 'programminghumor' ]}
      />
      <p>
        {lastUpdated ? (
          <span>
            Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
            {' '}
          </span>
        ): null}
        {!isFetching ? (
          <a /* eslint-disable-line jsx-a11y/anchor-is-valid */
            href='#'
            onClick={handleRefreshClick}
          >
            Refresh
          </a>
        ): null}
      </p>
      {isFetching && Array.isArray(items) && items.length === 0 ? (
        <h2>Loading ...</h2>
      ) : null}
      {!isFetching && Array.isArray(items) && items.length === 0 ? (
        <h2>Empty.</h2>
      ) : null}
      {Array.isArray(items) && items.length > 0 ? (
        <div style={{ opacity: isFetching ? 0.5 : 1 }}>
          <Posts posts={items} />
        </div>
      ) : null}
    </div>
  );
}