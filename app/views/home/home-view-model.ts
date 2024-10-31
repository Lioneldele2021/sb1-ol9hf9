import { Observable } from '@nativescript/core';
import { Post } from '../../models/user';

export class HomeViewModel extends Observable {
    private _selectedTab: number = 0;
    private _posts: Array<Post> = [];
    private _exams: Array<any> = [];
    private _discussions: Array<any> = [];
    private _searchQuery: string = '';

    constructor() {
        super();
        this.loadInitialData();
    }

    get selectedTab(): number {
        return this._selectedTab;
    }

    set selectedTab(value: number) {
        if (this._selectedTab !== value) {
            this._selectedTab = value;
            this.notifyPropertyChange('selectedTab', value);
        }
    }

    get posts(): Array<Post> {
        return this._posts;
    }

    get exams(): Array<any> {
        return this._exams;
    }

    get discussions(): Array<any> {
        return this._discussions;
    }

    get searchQuery(): string {
        return this._searchQuery;
    }

    set searchQuery(value: string) {
        if (this._searchQuery !== value) {
            this._searchQuery = value;
            this.notifyPropertyChange('searchQuery', value);
            this.filterExams();
        }
    }

    onNewPost() {
        // Navigate to new post page
        // TODO: Implement navigation
    }

    onDownload(args: any) {
        // Handle exam download
        // TODO: Implement download functionality
    }

    private loadInitialData() {
        // Simulate loading data from an API
        this._posts = [
            {
                id: '1',
                userId: 'user1',
                title: 'Help with Calculus Problem',
                content: 'Can someone help me solve this integral?',
                type: 'QUESTION',
                timestamp: new Date(),
                replies: []
            }
        ];

        this._exams = [
            {
                course: 'Calculus I',
                year: 2023,
                semester: 'Fall'
            }
        ];

        this._discussions = [
            {
                title: 'Study Group for Finals',
                lastActivity: 'Today',
                repliesCount: 5
            }
        ];

        this.notifyPropertyChange('posts', this._posts);
        this.notifyPropertyChange('exams', this._exams);
        this.notifyPropertyChange('discussions', this._discussions);
    }

    private filterExams() {
        // Implement exam filtering based on search query
        // TODO: Implement search functionality
    }
}