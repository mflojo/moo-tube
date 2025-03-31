import { categoriesRouter } from '@/modules/categories/server/procedures';
import { createTRPCRouter} from '../init';
import { studioRouter } from '@/modules/studio/server/procedures';
import { videosRouter } from '@/modules/videos/server/procedures';
import { VideoViewsRouter } from '@/modules/video-views/server/procedures';
import { VideoReactionsRouter } from '@/modules/video-reactions/server/procedures';
import { subscriptionsRouter } from '@/modules/subscriptions/server/procedures';
import { commentsRouter } from '@/modules/comments/server/procedures';
import { commentReactionsRouter } from '@/modules/comment-reactions/server/procedures';
import { suggestionsRouter } from '@/modules/suggestions/server/procedures';
import { searchRouter } from '@/modules/search/server/procedures';

export const appRouter = createTRPCRouter({
  categories: categoriesRouter,
  studio: studioRouter,
  search: searchRouter,
  videos: videosRouter,
  comments: commentsRouter,
  videoViews: VideoViewsRouter,
  videoReactions: VideoReactionsRouter,
  subscriptions: subscriptionsRouter,
  commentReactions: commentReactionsRouter,
  suggestions: suggestionsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;