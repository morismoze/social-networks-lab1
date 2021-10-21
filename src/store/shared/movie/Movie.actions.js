import { createAsyncThunk } from '@reduxjs/toolkit';

import { moviePaths } from '../../../api/movie/paths';
import * as api from '../../../api/movie';


const fetchFeaturedMovie = createAsyncThunk(moviePaths.getFeaturedMovie(), api.getTopRatedMovies)